import argparse
import hashlib
import logging
logging.basicConfig(level=logging.INFO)
from urllib.parse import urlparse

import pandas as pd 

logger = logging.getLogger(__name__) #referencia a nuestro logger


def main(filename):
    logger.info('Init cleaning process')

    df = _read_data(filename)
    newspaper_uid = _extract_newspaper_uid(filename)
    df = _add_newspaper_uid_column(df, newspaper_uid) #regresa el dataframe modificado
    df = _extract_host(df) #extraemos el host
    df = _fill_missing_titles(df)
    df = _generate_uids_for_rows(df)
    df = _remove_new_lines_from_body(df)
    df = _remove_duplicate_entries(df, 'title')
    df = _drop_rows_whith_missing_values(df)
    _save_data(df, filename)

    return df


def _read_data(filename): #declaramos funcion read_data
    logger.info('reading file {}'.format(filename))
    
    return pd.read_csv(filename,sep="|")
    
    #pd.read_csv(filename,encoding='cp1252')
    #return pd.read_csv(filename, encoding = "latin-1")


def _extract_newspaper_uid(filename):
    logger.info('Extract newspaper uid')
    newspaper_uid = filename.split('_')[0]
    logger.info('Detected: {}'.format(newspaper_uid))
    return newspaper_uid


def _add_newspaper_uid_column(df,newspaper_uid):
    logger.info('Filling newspaper_uid column with {}'.format(newspaper_uid))
    df['newspaper_uid'] = newspaper_uid  #agregamos una nueva columna newspaper_uid, sirve para cualquier periodico

    return df

def _extract_host(df):
    logger.info(f'Extracting host from urls')
    df['host'] = df['url'].apply(lambda url: urlparse(url).netloc)
    return df

#Vamos a sustituir el - con un espacio en la busqueda de tutlos dentro de las urls

def _fill_missing_titles(df):
    logger.info('Filling missing titles')
    missing_titles_mask = df['title'].isna()
    missing_titles = (df[missing_titles_mask]['url']
                        .str.extract(r'(?P<missing_titles>[^/]+)$')
                        .applymap(lambda title: title.split('-'))
                        .applymap(lambda title_word_list: ' '.join(title_word_list))
                     )

    df.loc[missing_titles_mask, 'title'] = missing_titles.loc[:, 'missing_titles']

    return df


def _generate_uids_for_rows(df):
    logger.info('Generating uids')
    uids = (df
            .apply(lambda row: hashlib.md5(bytes(row['url'].encode())), axis=1)
            .apply(lambda hash_object: hash_object.hexdigest())
            )

    df['uid'] = uids

    return df.set_index('uid')


def _remove_new_lines_from_body(df):
    logger.info('Remove new lines from body')

    stripped_body = (df
                     .apply(lambda row: row['body'], axis=1) 
                     .apply(lambda body: list(body))
                     .apply(lambda letters: list(map(lambda letter: letter.replace('\n', ' '), letters)))
                     .apply(lambda letters: list(map(lambda letter: letter.replace('%', ' '), letters)))
                     .apply(lambda letters: list(map(lambda letter: letter.replace('0', ' '), letters)))
                     .apply(lambda letters: ''.join(letters))
                      )

    df['body'] = stripped_body

    return df

  
def _remove_duplicate_entries(df, column_name):
    logger.info('Remove duplicate entries')
    df.drop_duplicates(subset=[column_name], keep='first', inplace=True)

    return df


def _drop_rows_whith_missing_values(df):
    logger.info('Remoive rows with missing values')

    return df.dropna()

#funcion para guardar 

def _save_data(df, filename):
    clean_filename = 'clean_{}'.format(filename)
    logger.info('Save data at location: {}'.format(clean_filename))
    df.to_csv(clean_filename)




if __name__ == '__main__':
    parser = argparse.ArgumentParser() #cual va a ser el dataset que se trabajara
    parser.add_argument('filename',
                        help='Dirty data',  #camino o ruta a los datos sucios
                        type=str )


args = parser.parse_args()

df = main(args.filename) 

print(df)