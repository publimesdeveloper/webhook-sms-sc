import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'webhookOut'})
export class WebhookOut {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text')
    phoneNumber: string

    @Column('text')
    shortNumber: string 

    @Column('text')
    mcc: string 

    @Column('text')
    mnc: string

    @Column('text')
    carrier: string

    @Column('text')
    date: string 

    @Column('text')
    time: string

    @Column('text')
    statusId: string

    @Column('text')
    transactionIdClient : string 

    @Column('text', {unique: true} )
    transactionIdMplus : string




}
