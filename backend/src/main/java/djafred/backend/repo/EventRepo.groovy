package djafred.backend.repo

import djafred.backend.model.Event
import org.springframework.data.repository.CrudRepository


interface EventRepo extends CrudRepository<Event, Integer> {
}
