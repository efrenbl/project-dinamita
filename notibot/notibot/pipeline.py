import logging
logging.basicConfig(level=logging.INFO)
import subprocess

logger = logging.getLogger(__name__)
news_sites_uids = ['eluniversal', 'elespectador', 'diariodecuba']  #definimos los periodicos con los que trabajamos


def main():
    _extract()
    _transfor()
    _load()

#se va a ejecurtar el script de scrappy que se encuentra en la carpeta extract
def _extract():
    logging.info('Iniciando  proceso de extraccion')
    for news_site_uid in news_sites_uids:
        subprocess.run(['python3', 'scrappy.py', news_site_uid], cwd='./extract')
        subprocess.run(['find', '.', '-name', '{}*'.format(news_site_uid),        #mover los archivos que se generan
                        '-exec', 'mv', '{}', '../transform/{}_.csv'.format(news_site_uid),
                        ';'], cwd='./extract')


#corremos los procesos para limpiar la data
def _transfor():
    logging.info('Iniciando  proceso de extraccion')
    for news_site_uid in news_sites_uids:
        dirty_data_filename = '{}_.csv'.format(news_site_uid)
        clean_data_filename = 'clean_{}'.format(dirty_data_filename)
        subprocess.run(['python3', 'newspaper.py', dirty_data_filename], cwd='./transform')
        subprocess.run(['rm', dirty_data_filename], cwd='./transform')
        subprocess.run(['mv', clean_data_filename, '../load/{}.csv'.format(news_site_uid)],
                        cwd='./transform'
                       )


def _load():
    pass
