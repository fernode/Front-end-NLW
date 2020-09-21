import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

export default function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  }

  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Estes são os professores disponíveis."
        description="Só vai mostrar se for passado a propriedade aqui"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo"></Input>
          <Input name="avatar" label="Avatar"></Input>
          <Input name="whatsapp" label="Whatsapp"></Input>
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Input name="name" label="Nome completo"></Input>
          <Input name="avatar" label="Avatar"></Input>
          <Input name="whatsapp" label="Whatsapp"></Input>
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input name="cost" label="Custo da sua hora por aula"></Input>
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => {
            return (
              <div className="schedule-item">
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

                <Input type="time" name="from" label="Das" />
                <Input type="time" name="to" label="Até" />
              </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={WarningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}
