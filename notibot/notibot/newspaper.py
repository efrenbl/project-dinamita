import argparse
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
  

if __name__ == '__main__':
    parser = argparse.ArgumentParser() #cual va a ser el dataset que se trabajara
    parser.add_argument('filename',
                        help='Dirty data',  #camino o ruta a los datos sucios
                        type=str )


args = parser.parse_args()

df = main(args.filename) 

print(df)