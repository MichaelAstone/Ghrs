# Generated by Django 2.1.1 on 2018-10-06 15:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20181006_1341'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='shoppingcart',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='api.Shoppingcart'),
        ),
    ]
