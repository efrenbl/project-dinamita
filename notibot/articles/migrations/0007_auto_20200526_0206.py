# Generated by Django 3.0.5 on 2020-05-26 07:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('articles', '0006_auto_20200524_2324'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='content_type',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='contenttypes.ContentType'),
        ),
        migrations.AddField(
            model_name='comment',
            name='object_id',
            field=models.PositiveIntegerField(default=1),
        ),
    ]
