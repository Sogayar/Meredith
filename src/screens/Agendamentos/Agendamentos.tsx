// src/screens/Agendamentos/Agendamentos.tsx
import { useState, useCallback } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
  User,
  Briefcase,
  X,
} from "lucide-react";
import { toast } from "react-hot-toast";

// Mock data
const mockProfessionals = [
  { id: 1, name: "Dr. João" },
  { id: 2, name: "Dra. Ana" },
  { id: 3, name: "Dr. Carlos" },
];

const mockServices = [
  { id: 1, name: "Consulta" },
  { id: 2, name: "Retorno" },
  { id: 3, name: "Exame" },
];

const mockEvents = [
  {
    id: 1,
    title: "Consulta com Dr. João",
    start: new Date(2025, 7, 5, 10, 0),
    end: new Date(2025, 7, 5, 11, 0),
    professionalId: 1,
    serviceId: 1,
    patientName: "Carlos Silva",
    status: "Confirmado",
  },
  {
    id: 2,
    title: "Exame com Dra. Ana",
    start: new Date(2025, 7, 6, 14, 0),
    end: new Date(2025, 7, 6, 15, 0),
    professionalId: 2,
    serviceId: 3,
    patientName: "Maria Oliveira",
    status: "Pendente",
  },
];

const localizer = momentLocalizer(moment);

const messages = {
  allDay: "Dia Inteiro",
  previous: "< Anterior",
  next: "Próximo >",
  today: "Hoje",
  month: "Mês",
  week: "Semana",
  day: "Dia",
  agenda: "Agenda",
  date: "Data",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "Não há eventos neste período.",
  showMore: (total) => `+ Ver mais (${total})`,
};

export default function Agendamentos() {
  const [events, setEvents] = useState(mockEvents);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filters, setFilters] = useState({ status: "Todos", professionalId: "Todos" });

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      setSelectedEvent({ start, end });
      setIsModalOpen(true);
    },
    [setEvents]
  );

  const handleSelectEvent = useCallback(
    (event) => {
      setSelectedEvent(event);
      setIsModalOpen(true);
    },
    []
  );

  const handleSave = (formData) => {
    const { date, startTime, endTime, patientName, serviceId, ...rest } = formData;
    const [hoursStart, minutesStart] = startTime.split(":");
    const [hoursEnd, minutesEnd] = endTime.split(":");

    const start = moment(date).hours(hoursStart).minutes(minutesStart).toDate();
    const end = moment(date).hours(hoursEnd).minutes(minutesEnd).toDate();

    const serviceName = mockServices.find(s => s.id === parseInt(serviceId))?.name || "";
    const title = `${serviceName}: ${patientName}`;

    if (selectedEvent.id) {
      // Update existing event
      setEvents(
        events.map((e) =>
          e.id === selectedEvent.id ? { ...e, ...rest, patientName, serviceId, start, end, title } : e
        )
      );
      toast.success("Agendamento atualizado com sucesso!");
    } else {
      // Create new event
      const newEvent = {
        id: events.length + 1,
        ...rest,
        patientName,
        serviceId,
        start,
        end,
        title,
      };
      setEvents([...events, newEvent]);
      toast.success("Agendamento criado com sucesso!");
    }
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleDelete = (eventId) => {
    let eventToRestore = null;
    setEvents(prevEvents => {
      const filteredEvents = prevEvents.filter(event => {
        if (event.id === eventId) {
          eventToRestore = event;
          return false;
        }
        return true;
      });
      return filteredEvents;
    });

    if (eventToRestore) {
      toast.success("Agendamento excluído com sucesso!", {
        action: {
          label: "Desfazer",
          onClick: () => {
            setEvents(prevEvents => [...prevEvents, eventToRestore]);
            toast.success("Exclusão desfeita!");
          },
        },
      });
    } else {
      toast.error("Erro ao excluir agendamento: Evento não encontrado.");
    }
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const Toolbar = ({ label, onNavigate, onView }) => (
    <div className="flex items-center justify-between mb-4 p-2 rounded-lg bg-white/10 backdrop-blur-md text-gray-800">
      <div className="flex items-center space-x-2">
        <button onClick={() => onNavigate("TODAY")} className="px-4 py-2 rounded-lg hover:bg-white/20 font-medium transition-colors">Hoje</button>
        <button onClick={() => onNavigate("PREV")} className="p-2 rounded-lg hover:bg-white/20 transition-colors"><ChevronLeft size={20} /></button>
        <button onClick={() => onNavigate("NEXT")} className="p-2 rounded-lg hover:bg-white/20 transition-colors"><ChevronRight size={20} /></button>
      </div>
      <h2 className="text-2xl font-bold">{label}</h2>
      <div className="flex items-center space-x-2">
        <button onClick={() => onView(Views.MONTH)} className={`px-4 py-2 rounded-lg ${view === Views.MONTH ? 'bg-white/30' : 'hover:bg-white/20'} transition-colors`}>Mês</button>
        <button onClick={() => onView(Views.WEEK)} className={`px-4 py-2 rounded-lg ${view === Views.WEEK ? 'bg-white/30' : 'hover:bg-white/20'} transition-colors`}>Semana</button>
        <button onClick={() => onView(Views.DAY)} className={`px-4 py-2 rounded-lg ${view === Views.DAY ? 'bg-white/30' : 'hover:bg-white/20'} transition-colors`}>Dia</button>
      </div>
    </div>
  );

  const filteredEvents = events.filter(event => {
    const statusMatch = filters.status === "Todos" || event.status === filters.status;
    const professionalMatch = filters.professionalId === "Todos" || event.professionalId === parseInt(filters.professionalId);
    return statusMatch && professionalMatch;
  });

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-white">Gestão de Agendamentos</h1>
          <button
            onClick={() => {
              setSelectedEvent({});
              setIsModalOpen(true);
            }}
            className="flex items-center bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-300 font-medium border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <Plus className="mr-2" /> Novo Agendamento
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <select
            name="status"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="w-full p-2 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/20 focus:border-blue-500 outline-none"
          >
            <option value="Todos">Todos os Status</option>
            <option value="Confirmado">Confirmado</option>
            <option value="Pendente">Pendente</option>
            <option value="Cancelado">Cancelado</option>
          </select>
          <select
            name="professionalId"
            value={filters.professionalId}
            onChange={(e) => setFilters({ ...filters, professionalId: e.target.value })}
            className="w-full p-2 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/20 focus:border-blue-500 outline-none"
          >
            <option value="Todos">Todos os Profissionais</option>
            {mockProfessionals.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6">
          <Calendar
            localizer={localizer}
            events={filteredEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "calc(100vh - 200px)" }}
            view={view}
            date={date}
            onView={setView}
            onNavigate={setDate}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            selectable
            components={{
              toolbar: Toolbar,
            }}
            messages={messages}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.status === "Confirmado" ? "#10B981" : "#F59E0B",
                borderRadius: "5px",
                opacity: 0.8,
                color: "white",
                border: "0px",
                display: "block",
              },
            })}
          />
        </div>
      </div>
      {isModalOpen && (
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          onDelete={handleDelete}
          event={selectedEvent}
        />
      )}
    </>
  );
}

const AppointmentModal = ({ isOpen, onClose, onSave, event, onDelete }) => {
  const [formData, setFormData] = useState({
    title: event?.title || "",
    patientName: event?.patientName || "",
    professionalId: event?.professionalId || "",
    serviceId: event?.serviceId || "",
    status: event?.status || "Pendente",
    date: event?.start ? moment(event.start).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD"),
    startTime: event?.start ? moment(event.start).format("HH:mm") : "",
    endTime: event?.end ? moment(event.end).format("HH:mm") : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newFormData = { ...prev, [name]: value };
      if (name === "startTime") {
        newFormData.endTime = moment(value, "HH:mm").add(1, "hour").format("HH:mm");
      }
      return newFormData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{event?.id ? "Editar" : "Novo"} Agendamento</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100"><X /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CalendarIcon className="text-gray-400" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none"
                required
              />
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-gray-400 flex-shrink-0" />
              <div className="flex items-center w-full space-x-2">
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none"
                  required
                />
                <span className="text-gray-500">até</span>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <User className="text-gray-400" />
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Nome do Paciente"
                className="w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none"
                required
              />
            </div>
            <div className="flex items-center space-x-3">
              <Briefcase className="text-gray-400" />
              <select
                name="serviceId"
                value={formData.serviceId}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none"
                required
              >
                <option value="">Selecione o Serviço</option>
                {mockServices.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-3">
              <User className="text-gray-400" />
              <select
                name="professionalId"
                value={formData.professionalId}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none"
                required
              >
                <option value="">Selecione o Profissional</option>
                {mockProfessionals.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-gray-400" />
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none"
              >
                <option value="Pendente">Pendente</option>
                <option value="Confirmado">Confirmado</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-8">
            {event?.id && (
              <button
                type="button"
                onClick={() => onDelete(event.id)}
                className="px-4 py-2 rounded-lg text-red-600 hover:bg-red-100"
              >
                Excluir
              </button>
            )}
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
