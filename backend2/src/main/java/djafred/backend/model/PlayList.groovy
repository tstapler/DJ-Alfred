package djafred.backend.model

import org.hibernate.mapping.OneToMany

import javax.persistence.Column
import javax.persistence.Entity

@Entity
class PlayList {
    @Column
    String name

    @Column
    String createdBy

    @Column
    List<Song> songs
}
