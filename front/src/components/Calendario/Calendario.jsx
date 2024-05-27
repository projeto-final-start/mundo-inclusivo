import "./Calendario.css"
import React from "react";
import Fullcalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendario() {
    return <div className="calendario">
        {/* initialView={"timeGridDay"} // para visualização do dia
        initialView={"dayGridMonth"} // para visualização do mês
        initialView={"timeGridWeek"} // para visualização da semana */}

        <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"} // para visualização do mês
            headerToolbar={{
                start: "today prev next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            height={'50vh'}
            

        />
    </div>

}


export default Calendario