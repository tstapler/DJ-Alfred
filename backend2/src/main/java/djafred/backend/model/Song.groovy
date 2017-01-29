package djafred.backend.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table
class Song implements Serializable {
    @Id
    @GeneratedValue
    private Integer id

    @Column
    String title

    @Column
    String album

    @Column
    String artist

    @ManyToOne
    private Playlist playlist

}
