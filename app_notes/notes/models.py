from django.db import models
from django.utils.translation import gettext_lazy as _

from users.models import User


class Note(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, editable=False, verbose_name=_('Created'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('Updated'))
    deadline = models.DateTimeField(verbose_name=_('Deadline'))
    data = models.JSONField(verbose_name=_('Data'))
    type = models.ForeignKey('NoteType', null=True, on_delete=models.SET_NULL, verbose_name=_('Type'))
    status = models.ForeignKey('NoteStatus', null=True, on_delete=models.SET_NULL, verbose_name=_('Status'))
    employer = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, verbose_name=_('User'))
    employee = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, verbose_name=_('Employee'))

    class Meta:
        db_table = 'notes'
        verbose_name = _('Notes')


class NoteType(models.Model):
    type = models.CharField(max_length=50, verbose_name=_('Note type'))

    class Meta:
        db_table = 'note_type'
        verbose_name = _('Note types')


class NoteStatus:
    status = models.CharField(max_length=50, verbose_name=_('Note status'))

    class Meta:
        db_table = 'note_status'
        verbose_name = _('Note status')
