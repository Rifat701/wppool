// CHART JS

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Votes A",
        data: [
          12, 19, 3, 5, 2, 15, 9, 7, 14, 8, 11, 4, 20, 13, 10, 15, 8, 17, 1, 20,
          5, 18, 12, 6, 14, 19, 3, 5, 2, 9, 7, 14, 8, 11, 4, 6, 13, 10, 15, 8,
          17, 1, 20, 5, 18, 7, 16, 14, 19, 3, 5, 2, 9, 7, 14, 8, 11, 4, 6, 13,
          10, 15, 8, 17, 1, 20, 5, 18, 7, 16,
        ],
        borderWidth: 1,
        borderColor: "#FC714D",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Votes B",
        data: [
          5, 15, 10, 16, 8, 4, 12, 9, 5, 7, 20, 3, 8, 17, 6, 12, 14, 10, 18, 15,
          7, 13, 5, 20, 8, 16, 4, 6, 9, 11, 13, 7, 5, 12, 10, 8, 6, 9, 11, 15,
          13, 7, 8, 16, 12, 18, 14, 10,
        ],
        borderWidth: 1,
        borderColor: "#615DE3",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Votes C",
        data: [
          3, 8, 20, 5, 10, 7, 6, 14, 9, 11, 4, 12, 8, 16, 7, 10, 11, 13, 12, 9,
          5, 14, 10, 17, 8, 6, 12, 15, 7, 5, 10, 14, 9, 11, 3, 8, 12, 14, 6, 7,
          13, 8, 11, 9, 10, 15, 12, 18,
        ],
        borderWidth: 1,
        borderColor: "#AFCD80",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Votes D",
        data: [
          3, 8, 13, 25, 10, 7, 6, 14, 9, 11, 4, 12, 8, 16, 17, 10, 11, 13, 12,
          9, 5, 14, 10, 17, 8, 6, 12, 15, 7, 5, 10, 14, 9, 11, 3, 8, 12, 14, 6,
          7, 13, 8, 11, 9, 10, 15, 12, 18,
        ],
        borderWidth: 1,
        borderColor: "#6F34A1",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
