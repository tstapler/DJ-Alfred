package djafred.backend.services

import djafred.backend.model.Event
import djafred.backend.repo.EventRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class EventService {

    @Autowired
    EventRepo eventRepo

    Iterable<Event>lookup() {
        eventRepo.findAll()
    }

    Event createEvent(String title, String desc, Date start,
                      Date end) {
        return eventRepo.save(new Event(title: title, desc: desc, start: start,
                end: end));
    }

    long total() {
        eventRepo.count()
    }
}
