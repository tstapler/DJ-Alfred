package djafred.backend.services

import djafred.backend.model.Playlist
import djafred.backend.repo.PlaylistRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class PlaylistService {

    @Autowired
    PlaylistRepo playlistRepo

    Iterable<Playlist> lookup() {
        playlistRepo.findAll()
    }

    Playlist createPlaylist(String name, String createdBy) {
        return playlistRepo.save(new Playlist(name: name, createdBy: createdBy))
    }

    long total() {
        PlaylistRepo.count()
    }
}
