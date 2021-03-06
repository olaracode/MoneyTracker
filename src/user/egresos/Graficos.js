import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Line, Pie } from "react-chartjs-2";
import "./egresos.css";

function Graficos(props) {
  const lineData = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: props.lineaTexto,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          props.linea.enero,
          props.linea.febrero,
          props.linea.marzo,
          props.linea.abril,
          props.linea.mayo,
          props.linea.junio,
          props.linea.julio,
          props.linea.agosto,
          props.linea.octubre,
          props.linea.noviembre,
          props.linea.diciembre,
        ],
      },
    ],
  };
  return (
    <div className="graficosContainer">
      <Paper>
        <Grid container spacing={2}>
          <Grid className="egresosPieContainer" item xs={12} sm={6}>
            <Pie
              data={{
                labels: props.categorias,
                datasets: [
                  {
                    data: [
                      props.renta.mes,
                      props.servicios.mes,
                      props.comida.mes,
                      props.lujos.mes,
                      props.metas.mes,
                      props.comida.mes,
                      props.salidas.mes,
                      props.miscelaneos.mes,
                    ],
                    backgroundColor: props.backgroundColor,
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: props.texto.mes,
                },
                legend: {
                  display: true,
                  position: "bottom",
                },
                maintainAspectRatio: false,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Pie
              data={{
                labels: props.categorias,
                datasets: [
                  {
                    data: [
                      props.renta.totales,
                      props.servicios.totales,
                      props.comida.totales,
                      props.lujos.totales,
                      props.metas.totales,
                      props.comida.totales,
                      props.salidas.totales,
                      props.miscelaneos.totales,
                    ],
                    backgroundColor: props.backgroundColor,
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: props.texto.totales,
                },
                legend: {
                  display: true,
                  position: "bottom",
                },
                maintainAspectRatio: false,
              }}
            />
          </Grid>
          <div className="lineHeight">
            <Grid item xs={12} sm={12}>
              <Line
                className="linea"
                data={lineData}
                options={{ maintainAspectRatio: false }}
              />
            </Grid>
          </div>
        </Grid>
      </Paper>
    </div>
  );
}

export default Graficos;
