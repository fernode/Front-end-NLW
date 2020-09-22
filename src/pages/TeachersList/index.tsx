import React, { FormEvent, useState } from 'react';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';
import './styles.css';

function TeachersList() {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Português', label: 'Português' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Geografia', label: 'Geografia' },
            ]}
            onChange={(e) => setSubject(e.target.value)}
          />

          <Select
            name="week-day"
            label="Dia da semana"
            value={week_day}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]}
            onChange={(e) => setWeekDay(e.target.value)}
          />

          <Input
            type="time"
            label="Horário"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher) => (
          <TeacherItem key={teacher} teacher={teacher} />
        ))}
      </main>
    </div>
  );
}

export default TeachersList;
