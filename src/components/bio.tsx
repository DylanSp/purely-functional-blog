/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import React, { ComponentProps, forwardRef, Ref, FC } from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";

const Content = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`;

const GatsbyImage = forwardRef(
  (props: ComponentProps<typeof Image>, ref: Ref<Image>) => (
    <Image {...props} ref={ref} />
  )
);

const Avatar = styled(GatsbyImage)`
  border-radius: 100%;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 2)};
  min-width: 50px;
`;

export const Bio: FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  console.log(`Site metadata: ${JSON.stringify(data.site.siteMetadata)}`);

  return (
    <Content>
      <Avatar
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{ borderRadius: "50%" }}
      />
      <p>
        {`${author}'s`} thoughts on functional programming, compilers, type
        systems, and other assorted minutiae.
      </p>
    </Content>
  );
};
