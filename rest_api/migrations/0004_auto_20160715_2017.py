# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-07-16 01:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0003_event'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='song',
            options={'ordering': ('submission_time',)},
        ),
        migrations.RenameField(
            model_name='song',
            old_name='added',
            new_name='submission_time',
        ),
        migrations.AddField(
            model_name='song',
            name='votes',
            field=models.IntegerField(default=0),
        ),
    ]
