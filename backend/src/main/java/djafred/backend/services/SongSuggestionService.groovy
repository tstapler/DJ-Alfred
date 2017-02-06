package djafred.backend.services

import djafred.backend.model.Song
import djafred.backend.model.SongSuggestion
import djafred.backend.repo.PlaylistRepo
import djafred.backend.repo.SongRepo
import djafred.backend.repo.SongSuggestionRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class SongSuggestionService {

    @Autowired
    SongSuggestionRepo songSuggestionRepo

    SongSuggestion createSong(String title, String artist){
        return songSuggestionRepo.save(new SongSuggestion(title: title, artist: artist))
    }

    long total(){
        return songSuggestionRepo.count()
    }
}
