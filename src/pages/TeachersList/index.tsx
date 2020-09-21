import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';
import './styles.css';

function TeachersList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Português', label: 'Português' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Geografia', label: 'Geografia' },
            ]}
          />

          <Select
            name="week-day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input type="time" label="Horário" name="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeachersList;
