package djafred.backend.repo

import djafred.backend.model.Song
import org.springframework.data.repository.CrudRepository


interface SongRepo extends CrudRepository<Song, Integer> {
}
