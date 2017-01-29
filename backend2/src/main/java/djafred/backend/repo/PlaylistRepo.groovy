package djafred.backend.repo

import djafred.backend.model.PlayList
import org.springframework.data.repository.CrudRepository


interface PlaylistRepo extends CrudRepository<PlayList, Integer> {
}
