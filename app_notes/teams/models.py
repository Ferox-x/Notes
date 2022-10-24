from django.db import models
from django.utils.translation import gettext_lazy as _

from notes.models import Note
from users.models import User


class Team(models.Model):
    name = models.CharField(max_length=15, verbose_name=_('Team name'))
    leader = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, verbose_name=_('Team leader'))
    chat_id = models.IntegerField(null=True, verbose_name=_('Chat id'))


class TeamAndNotes(models.Model):
    team_id = models.ForeignKey(Team, verbose_name=_('Team id'), on_delete=models.CASCADE)
    note_id = models.ForeignKey(Note, verbose_name=_('Note'), on_delete=models.CASCADE)

