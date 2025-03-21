body {
    text-align: center;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}
h1 {
    color: #333;
    margin-top: 20px;
}
.seat-container {
    display: grid;
    grid-template-columns: repeat(3, 140px);
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
}
.seat {
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 50%;
    transition: background 0.3s, transform 0.3s ease-in-out;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}
.available {
    background-color: green;
    color: white;
}
.occupied {
    background-color: red;
    color: white;
    transform: scale(1.1);
}
.seat:hover {
    transform: scale(1.2);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
}
.timer {
    font-size: 14px;
    margin-top: 5px;
    color: white;
}
