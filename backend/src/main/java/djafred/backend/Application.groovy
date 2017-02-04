package djafred.backend

import djafred.backend.services.EventService;
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

    @Autowired
    private EventService eventService

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {
        playlistService.createPlaylist("CountDown", "Chris")
        eventService.createEvent("All day event ", "stuff",
                new Date().parse("yyy-mm-dd", "2016-01-01"), new Date())
        eventService.createEvent("Long Event", "stuff",
                new Date().parse("yyy-mm-dd", "2016-01-07"),
                new Date().parse("yyy-mm-dd", "2016-01-10"))
        eventService.createEvent("Repeating Event", "stuffs", new Date().parse("yyy-mm-dd", "2016-01-09"),
                new Date().parse("yyy-mm-dd","2016-01-09"))
        eventService.createEvent("Conference", "stuff", new Date().parse("yyy-mm-dd", "2016-01-11"),
                new Date().parse("yyy-mm-dd", "2016-01-13"))

    }
}


