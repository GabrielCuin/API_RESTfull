import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint eos
            quos, temporibus non nesciunt labore illo? Repellat eos rem
            temporibus, ipsam obcaecati cumque porro veritatis quibusdam
            molestiae, praesentium odit beatae.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#"> link 1</a>
              </li>
              <li>
                <a href="#"> link 2</a>
              </li>
              <li>
                <a href="#"> link 3</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
