import pin from '../assets/pin.png';
import date from '../assets/calender.png';
import invoice from '../assets/invoice.png';
import technician from '../assets/technician.png';

export type WaysOfWorking = {
  title: string;
  listOfWaysOfWorking: {
    id: number;
    title: string;
    icon: string;
    description: string;
  }[];
};

export const waysOfWorking: WaysOfWorking[] = [
  {
    title: 'Cara Kerja',
    listOfWaysOfWorking: [
      {
        id: 1,
        title: 'Buat Pesanan',
        icon: pin,
        description: 'Input keluhan AC Kamu',
      },
      {
        id: 2,
        title: 'Tandai Lokasi',
        icon: date,
        description: 'Tentukan lokasi service AC Kamu',
      },
      {
        id: 3,
        title: 'Tentukan Jadwal',
        icon: invoice,
        description: 'Pilih waktu yang tepat untuk Kamu',
      },
      {
        id: 4,
        title: 'Teknisi Datang',
        icon: technician,
        description: 'Teknisi akan datang sesuai jadwal',
      },
    ],
  },
];
