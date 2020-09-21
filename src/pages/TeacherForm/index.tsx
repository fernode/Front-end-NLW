import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

export default function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

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

  function setScheduleValue(position: Number, field: string, value: string) {
    const addNewScheduleItem = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    console.log(addNewScheduleItem);
    setScheduleItems(addNewScheduleItem);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('cadastro realizado com sucesso');
        history.push('/');
      })
      .catch(() => {
        alert('Erro no cadastro');
      });
    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    });
  }

  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Estes são os professores disponíveis."
        description="Só vai mostrar se for passado a propriedade aqui"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo"
              onChange={(e) => setName(e.target.value)}
            ></Input>
            <Input
              name="avatar"
              label="Avatar"
              onChange={(e) => setAvatar(e.target.value)}
            ></Input>
            <Input
              name="whatsapp"
              label="Whatsapp"
              onChange={(e) => setWhatsapp(e.target.value)}
            ></Input>
            <TextArea
              name="bio"
              label="Biografia"
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
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
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              onChange={(e) => setCost(e.target.value)}
            ></Input>
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div className="schedule-item" key={scheduleItem.week_day}>
                  <Select
                    name="week-day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda' },
                      { value: '2', label: 'Terça' },
                      { value: '3', label: 'Quarta' },
                      { value: '4', label: 'Quinta' },
                      { value: '5', label: 'Sexta' },
                      { value: '6', label: 'Sábado' },
                    ]}
                    onChange={(e) =>
                      setScheduleValue(index, 'week_day', e.target.value)
                    }
                  />

                  <Input
                    type="time"
                    name="from"
                    label="Das"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleValue(index, 'from', e.target.value)
                    }
                  />
                  <Input
                    type="time"
                    name="to"
                    label="Até"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleValue(index, 'to', e.target.value)
                    }
                  />
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
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
