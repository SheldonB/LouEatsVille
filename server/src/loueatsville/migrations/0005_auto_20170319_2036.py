# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-19 20:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loueatsville', '0004_auto_20170225_2222'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='phone_number',
            field=models.CharField(max_length=14, null=True),
        ),
    ]