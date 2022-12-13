# Generated by Django 4.1.2 on 2022-12-03 08:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NoteStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=50, verbose_name='Note status')),
            ],
            options={
                'verbose_name': 'Note status',
                'db_table': 'note_status',
            },
        ),
        migrations.CreateModel(
            name='NoteType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=50, verbose_name='Note type')),
            ],
            options={
                'verbose_name': 'Note types',
                'db_table': 'note_type',
            },
        ),
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated')),
                ('deadline', models.DateTimeField(verbose_name='Deadline')),
                ('data', models.JSONField(verbose_name='Data')),
                ('status', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='notes.notestatus', verbose_name='Status')),
                ('type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='notes.notetype', verbose_name='Type')),
            ],
            options={
                'verbose_name': 'Notes',
                'db_table': 'notes',
            },
        ),
    ]