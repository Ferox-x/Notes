from rest_framework import serializers

from notes.models import NoteType, NoteStatus, Note


class NoteTypeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('type',)
        model = NoteType


class NoteStatusSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('status',)
        model = NoteStatus


# TODO Insert into services
class NoteSlugRelatedField(serializers.SlugRelatedField):

    def __init__(self, model, **kwargs):
        super().__init__(**kwargs)
        self.model_name = model

    def to_internal_value(self, data):
        object = self.model_name.objects.get(id=data)
        return object


class NoteSerializer(serializers.ModelSerializer):
    status = NoteSlugRelatedField(
        slug_field='status',
        queryset=NoteStatus.objects.all(),
        model=NoteStatus,
    )

    type = NoteSlugRelatedField(
        slug_field='type',
        queryset=NoteType.objects.all(),
        model=NoteType,
    )

    class Meta:
        fields = ('id', 'data', 'type', 'status', 'deadline', 'created_at', 'updated_at', )
        model = Note
