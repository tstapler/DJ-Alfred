package djafred.backend.repo

import djafred.backend.model.SongSuggestion
import org.springframework.data.repository.CrudRepository

interface SongSuggestionRepo extends CrudRepository<SongSuggestion, Integer> {
}
