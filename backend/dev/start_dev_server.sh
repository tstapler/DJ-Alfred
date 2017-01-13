#!/bin/bash - 
#===============================================================================
#
#          FILE: start_dev_server.sh
# 
#         USAGE: ./start_dev_server.sh 
# 
#   DESCRIPTION: 
# 
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: ---
#        AUTHOR: YOUR NAME (), 
#  ORGANIZATION: 
#       CREATED: 01/13/2017 10:17
#      REVISION:  ---
#===============================================================================

set -o nounset                              # Treat unset variables as an error

DIR=$(dirname "$(readlink -f "$0")")

if [[ ! -f $DIR/../db.sqlite3 ]]; then
	python $DIR/../manage.py migrate
fi

python $DIR/../manage.py runserver
