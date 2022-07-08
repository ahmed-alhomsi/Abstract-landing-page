import { StyledCard } from "../styled/Card.styled"

function Card({ img, h3, p}) {
  return (
    <StyledCard>
        <img src={img} alt="service" />
            <div>
                <h3>{h3}</h3>
                <p>{p}</p>
                <a href="https://ahmed-alhomsi.github.io/portfolio/" target="_blank">Learn More</a>
            </div>
    </StyledCard>
  )
}

export default Card