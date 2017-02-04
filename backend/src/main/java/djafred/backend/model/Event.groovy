package djafred.backend.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table
class Event {

    @Id
    @GeneratedValue
    private Integer id

    @Column
    String title

    @Column
    String desc

    @Column
    Date start

    @Column
    Date end

}
