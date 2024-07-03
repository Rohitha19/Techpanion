import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Invoice extends Model {
  @Column
  currency: string;

  @Column
  basicAmount: number;

  @Column
  taxAmount: number;

  @Column
  totalAmount: number;

  @Column
  advancePaid: number;

  @Column
  tcsApplicable: boolean;

  @Column
  netPayableAmount: number;
}
