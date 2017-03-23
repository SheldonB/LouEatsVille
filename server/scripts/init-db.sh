#!/bin/bash

./scripts/wait-for-it.sh db:5432 -- python src/manage.py migrate

PGPASSWORD=password psql -h db -p 5432 -d loueatsville -U admin -f ./data/loueatsville_business.sql
PGPASSWORD=password psql -h db -p 5432 -d loueatsville -U admin -f ./data/loueatsville_inspection.sql
PGPASSWORD=password psql -h db -p 5432 -d loueatsville -U admin -f ./data/loueatsville_violation.sql
