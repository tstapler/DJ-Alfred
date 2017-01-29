package djafred.backend.services

import djafred.backend.model.Playlist
import djafred.backend.model.Song
import djafred.backend.repo.PlaylistRepo
import djafred.backend.repo.SongRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class SongService {


    @Autowired
    SongRepo songRepo
    @Autowired
    PlaylistRepo playlistRepo

    Song createSong(String title, String artist, String album, String playlistName){
        Playlist playlist = playlistRepo.findByName(playlistRepo)
        if(playlist == null){
            throw new RuntimeException("Playlist does not exist: " + playlistName)
        }
        return songRepo.save(new Song(title: title, artist: artist,
                album: album, playlist: playlist))
    }

    long total(){
        return songRepo.count()
    }
}
