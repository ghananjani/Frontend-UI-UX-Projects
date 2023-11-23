setInterval(() => {

    date = new Date();

    h_hand = date.getHours();
    m_hand = date.getMinutes();
    s_hand = date.getSeconds();

    h_handRotation = h_hand * (30) + m_hand * (1 / 2) +  s_hand * (1 / 120);
    m_handRotation = m_hand * (6) +  s_hand * (0.1);
    s_handRotation = s_hand * (6);

    hour.style.transform = `rotate(${h_handRotation}deg)`;
    minute.style.transform = `rotate(${m_handRotation}deg)`;
    second.style.transform = `rotate(${s_handRotation}deg)`;

}, 1000); 
