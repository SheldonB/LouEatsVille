# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-19 20:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loueatsville', '0006_auto_20170319_2041'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inspection',
            name='score',
            field=models.IntegerField(null=True),
        ),
    ]
