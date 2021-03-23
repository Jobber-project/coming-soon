import React from 'react'
import styled from 'styled-components'

import AvatarImg from '../../images/avatar.png'

const Container = styled.div`
  padding: 25px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: white;
  box-shadow: 15px 14px 40px 8px rgba(0, 0, 0, 0.25);
  color: #2b2a35;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const OuterRow = styled.div`
  display: flex;
  width: 100%;
`

const OuterLeft = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

const OuterRight = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
`

const NarrowOuterRight = styled(OuterRight)`
  width: 0;
`

const Title = styled.span`
  font-weight: 700;
  color: #2b2a35;
`

const Cv = styled(Title)`
  margin-right: auto;
  padding-top: 8px;
  padding-right: 15px;
  font-size: 1.6rem;
  line-height: 2em;
  transform: translateX(-100%);
`

const CvHidden = styled(Title)`
  padding-right: 15px;
  font-size: 1.6rem;
  line-height: 2em;
  visibility: hidden;
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2px;
`

const Avatar = styled.img`
  width: 46px;
  height: 46px;
  margin-bottom: 10px;
  border-radius: 50%;
  object-fit: cover;
`

const Name = styled(Title)`
  margin-bottom: 1px;
  font-size: 1.4rem;
  line-height: 2em;
  text-align: center;
  text-transform: uppercase;
`

const CurrentRole = styled.span`
  margin-bottom: 10px;
  font-size: 1.2rem;
  line-height: 1em;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const ContactDetail = styled.span`
  font-size: 0.8rem;
  line-height: 1.5em;
  text-align: center;

  & ${Title} {
    font-weight: 500;
  }
`

const SectionRow = styled.div`
  display: flex;
  margin: 0 -15px;

  &:not(:first-child) + & {
    padding-top: 10px;
  }
`

const SectionCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  &:first-child {
    width: 58px;
    flex-shrink: 0;
  }

  &:last-child {
    flex-grow: 1;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;

  & ${SectionRow}:first-child {
    padding-bottom: 10px;
  }

  & ${SectionRow}:first-child ${SectionCol} {
    justify-content: center;
  }
`

const Chapter = styled(Title)`
  font-size: 1.2rem;
  line-height: 1.175em;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`

const Place = styled(Title)`
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.175em;
`

const ParagraphTitle = styled(Title)`
  margin-bottom: 5px;
  font-size: 0.9rem;
  line-height: 1.25em;
`

const Paragraph = styled.span`
  font-size: 0.9rem;
  line-height: 1.25em;
`

const Time = styled.span`
  padding-top: 5px;
  font-size: 0.9rem;
  line-height: 1.25em;
`

const SkillsRow = styled.div`
  display: flex;
  margin: 0 -15px;
`

const SkillsCol = styled.div`
  display: flex;
  padding: 0 15px;
  flex-grow: 1;
  flex-direction: column;

  & ${Paragraph} + ${Paragraph} {
    padding-top: 3px;
  }
`

const SpecialSkill = styled(Paragraph)`
  padding-top: 0 !important;
  font-weight: 500;
  font-size: 6px;
`

export default function ResumeTemplate() {
  return (
    <Container>
      <OuterRow>
        <OuterLeft>
          <Profile>
            <Avatar src={AvatarImg} alt="Sample avatar" />
            <Name>Johan Fredriksson</Name>
            <CurrentRole>Snickare / Målare</CurrentRole>
            <ContactInfo>
              <ContactDetail>
                <Title>Tel:</Title>&nbsp;070-739 55 06
              </ContactDetail>
              <ContactDetail>
                <Title>Mail:</Title>&nbsp;j.fredriksson@gmail.com
              </ContactDetail>
            </ContactInfo>
          </Profile>
        </OuterLeft>
        <NarrowOuterRight>
          <Cv>CV</Cv>
        </NarrowOuterRight>
      </OuterRow>
      <OuterRow>
        <OuterLeft>
          {/* Om mig */}
          <Section>
            <SectionRow>
              <SectionCol>
                <Chapter>Om mig</Chapter>
              </SectionCol>
              <SectionCol>
                <Line />
              </SectionCol>
            </SectionRow>
            <SectionRow>
              <SectionCol>
                <Place>Målsättning</Place>
              </SectionCol>
              <SectionCol>
                <ParagraphTitle>Framåtsträvade & ambitiös</ParagraphTitle>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper varius fermentum aliquam risus, eget fermentum
                  aliquam risus, eget.
                </Paragraph>
              </SectionCol>
            </SectionRow>
          </Section>
          {/* Erfarenhet */}
          <Section>
            <SectionRow>
              <SectionCol>
                <Chapter>Erfarenhet</Chapter>
              </SectionCol>
              <SectionCol>
                <Line />
              </SectionCol>
            </SectionRow>
            <SectionRow>
              <SectionCol>
                <Place>Albreks Bygg</Place>
                <Time>2019 - 2020</Time>
              </SectionCol>
              <SectionCol>
                <ParagraphTitle>Möbelsnickare</ParagraphTitle>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper varius fermentum aliquam risus, eget fermentum
                  aliquam risus, eget.
                </Paragraph>
              </SectionCol>
            </SectionRow>
            <SectionRow>
              <SectionCol>
                <Place>Frihemshus</Place>
                <Time>2017 - 2019</Time>
              </SectionCol>
              <SectionCol>
                <ParagraphTitle>Byggarbetare</ParagraphTitle>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper varius fermentum aliquam risus, eget fermentum
                  aliquam risus, eget.
                </Paragraph>
              </SectionCol>
            </SectionRow>
          </Section>
          {/* Utbildning */}
          <Section>
            <SectionRow>
              <SectionCol>
                <Chapter>Utbildning</Chapter>
              </SectionCol>
              <SectionCol>
                <Line />
              </SectionCol>
            </SectionRow>
            <SectionRow>
              <SectionCol>
                <Place>Stenbyskolan</Place>
                <Time>2016 - 2017</Time>
              </SectionCol>
              <SectionCol>
                <ParagraphTitle>Traditionell hantverkare</ParagraphTitle>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper varius fermentum aliquam risus, eget fermentum
                  aliquam risus, eget.
                </Paragraph>
              </SectionCol>
            </SectionRow>
            <SectionRow>
              <SectionCol>
                <Place>YrkesAkademin</Place>
                <Time>2014 - 2016</Time>
              </SectionCol>
              <SectionCol>
                <ParagraphTitle>Byggnadssnickare</ParagraphTitle>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper varius fermentum aliquam risus, eget fermentum
                  aliquam risus, eget.
                </Paragraph>
              </SectionCol>
            </SectionRow>
            <SectionRow>
              <SectionCol>
                <Place>BH-gymnasiet</Place>
                <Time>2011 - 2014</Time>
              </SectionCol>
              <SectionCol>
                <ParagraphTitle>Samhällsvetenskapsprogrammet</ParagraphTitle>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper varius fermentum aliquam risus, eget fermentum
                  aliquam risus, eget.
                </Paragraph>
              </SectionCol>
            </SectionRow>
          </Section>
          {/* Kunskaper */}
          <Section>
            <SectionRow>
              <SectionCol>
                <Chapter>Kunskaper</Chapter>
              </SectionCol>
              <SectionCol>
                <Line />
              </SectionCol>
            </SectionRow>
            <SectionRow>
              <SectionCol />
              <SectionCol>
                <SkillsRow>
                  <SkillsCol>
                    <ParagraphTitle>Språk</ParagraphTitle>
                    <Paragraph>Svenska</Paragraph>
                    <Paragraph>Engelska</Paragraph>
                    <Paragraph>Franska</Paragraph>
                    <SpecialSkill>Modersmål</SpecialSkill>
                  </SkillsCol>
                  <SkillsCol>
                    <ParagraphTitle>Program &amp; datorkunskap</ParagraphTitle>
                    <Paragraph>Microsoft Word</Paragraph>
                    <Paragraph>Microsoft Powerpoint</Paragraph>
                    <Paragraph>AutoCad 3D</Paragraph>
                  </SkillsCol>
                  <SkillsCol>
                    <ParagraphTitle>Övrigt</ParagraphTitle>
                    <Paragraph>Truckkort</Paragraph>
                    <Paragraph>Svetsar-certifikat</Paragraph>
                    <Paragraph>B-körkort</Paragraph>
                  </SkillsCol>
                </SkillsRow>
              </SectionCol>
            </SectionRow>
          </Section>
        </OuterLeft>
        <OuterRight>
          <CvHidden>CV</CvHidden>
        </OuterRight>
      </OuterRow>
    </Container>
  )
}
