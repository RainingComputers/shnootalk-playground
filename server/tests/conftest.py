from typing import Tuple, Iterator

import os
import shutil
import pytest
from pymongo import MongoClient
from pymongo.collection import Collection


@pytest.fixture
def mongo_connection() -> Tuple[Collection, str]:
    mongo_url = 'mongodb://root:example@localhost:27017'
    mongo_db_name = 'shnootalk-cloud-compile'
    mongo_collection_name = 'job-output'

    os.environ['MONGO_URL'] = mongo_url

    cluster = MongoClient(mongo_url)
    collection = cluster[mongo_db_name][mongo_collection_name]

    collection.delete_many({})

    doc_id = collection.insert_one({'status': 'SCHEDULED'})

    return collection, str(doc_id.inserted_id)


@pytest.fixture
def empty_dir() -> Iterator[str]:
    dir_name = 'empty_dir'

    shutil.rmtree(dir_name, ignore_errors=True)

    cwd = os.getcwd()
    os.mkdir(dir_name)

    yield dir_name

    os.chdir(cwd)
    shutil.rmtree(dir_name)


os.environ['TIMEOUT'] = '1'
