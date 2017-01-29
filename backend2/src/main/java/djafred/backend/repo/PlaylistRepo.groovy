package djafred.backend.repo

import djafred.backend.model.Playlist
import org.springframework.data.repository.CrudRepository


interface PlaylistRepo extends CrudRepository<Playlist, Integer> {
}
