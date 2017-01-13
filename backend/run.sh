#!/bin/bash
if [[ ! -f /backend/db.sqlite3 ]]; then
	(cd /backend && python manage.py migrate)
fi
supervisord -n
