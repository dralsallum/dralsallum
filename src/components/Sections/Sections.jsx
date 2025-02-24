import React, { useState } from "react";
import {
  SecArt,
  SecBot,
  SecImg,
  SecMain,
  SecMem,
  SecSubArt,
  SecTab,
  SecTop,
  SectionsContainer,
  SectionsSubMain,
  SectionsWrap,
} from "./Sections.elements";
import { Link } from "react-router-dom";

const SectionMember = ({ src, title, description, link }) => (
  <SecMem>
    <Link to={link} style={{ textDecoration: "none" }}>
      <SecImg src={src} alt={title} />
      <SecTop>{title}</SecTop>
      <SecBot>{description}</SecBot>
    </Link>
  </SecMem>
);

const Sections = () => {
  const members = [
    {
      src: "https://www.truity.com/sites/all/themes/bootstrap_truity/images-new/test-homepage-icons/enneagram.png",
      title: "الوظيفة",
      description: "تحديد الوظيفة",
      link: "/job", // Adjust the link as needed
    },
    {
      src: "https://www.truity.com/sites/all/themes/bootstrap_truity/images-new/test-homepage-icons/typefinder.png",
      title: "الشخصية",
      description: "نوع شخصيتك",
      link: "/personality", // Adjust the link as needed
    },
    {
      src: "https://www.truity.com/sites/all/themes/bootstrap_truity/images-new/test-homepage-icons/bigfive.png",
      title: "نوبات الهلع",
      description: "تخلص من القلق",
      link: "/extra",
    },
    {
      src: "https://www.truity.com/sites/all/themes/bootstrap_truity/images-new/test-homepage-icons/careerstests.png",
      title: "المواضيع",
      description: "طريقتك بالتعلم",
      link: "/learning", // Adjust the link as needed
    },
  ];

  return (
    <SectionsWrap>
      <SectionsContainer>
        <SectionsSubMain>
          <SecMain>
            <SecArt>
              <SecSubArt>
                <SecTab>
                  {members.map((member, index) => (
                    <SectionMember key={index} {...member} />
                  ))}
                </SecTab>
              </SecSubArt>
            </SecArt>
          </SecMain>
        </SectionsSubMain>
      </SectionsContainer>
    </SectionsWrap>
  );
};

export default Sections;
