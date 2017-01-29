package djafred.backend;

import djafred.backend.services.PlaylistService;
import djafred.backend.services.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application implements CommandLineRunner{


    @Autowired
    private PlaylistService playlistService;

    @Autowired
    private SongService songService;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {
        playlistService.createPlaylist("CountDown", "Chris")
    }
}


