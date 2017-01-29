package djafred.backend.model

import djafred.backend.repo.PlaylistRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class PlaylistService  {

    @Autowired
    PlaylistRepo playlistRepo

    List<Playlist> getAllPlaylists(){
        playlistRepo.findAll()
    }

}
