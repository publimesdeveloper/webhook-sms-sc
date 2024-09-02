import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'webhookIn'})
export class WebhookIn {

    @PrimaryGeneratedColumn()
    id: string

    @Column('text')
    phoneNumber : string

    @Column('text')
    shortNumber : string

    @Column('text')
    mcc : string

    @Column('text')
    mnc : string

    @Column('text')
    carrier : string

    @Column('text')
    date : string

    @Column('text')
    time : string

    @Column('text')
    message : string

}
