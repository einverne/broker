import * as React from "react"
import {graphql, StaticQuery} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const Broker = () => {

  return (
    <StaticQuery
      query={graphql`
        query BrokersQuery {
          contentYaml {
            brokers {
              description
              link
              details
              name
              tags
              logo {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, width: 50, height: 50, quality: 95)
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="">
          {data.contentYaml.brokers.map(broker => {

            return (
              <div className="px-4 py-6 mt-4 leading-normal rounded shadow bg-white dark:bg-black">
                <div className="flex items-center justify-between">
                  <div className="flex-initial leading-5 mx-3">
                    <a href={`${broker.link}`} className="flex">
                      <div className="mr-4">
                        <GatsbyImage
                          className="w-12 rounded-full"
                          alt={broker.name}
                          image={broker.logo.childImageSharp.gatsbyImageData}
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold" color={`${broker.color}`}>{broker.name}</h4>
                        <h5 className="text-gray-400 text-sm">{broker.description}</h5>
                      </div>
                    </a>
                  </div>
                  <div className="flex-none">
                    <a className="text-white py-2 px-2 rounded-lg text-xs bg-blue-600" href={`${broker.link}`}>极速开户</a>
                  </div>
                </div>
                <div className="text-xs px-4 pt-4 text-gray-800">
                  {broker.tags.map(tag => {
                    return (
                      <span className="text-white bg-gray-400 p-1 rounded text-xs mr-2">{tag}</span>
                    )
                  })}
                  <ul className="list-disc bg-rose-200 pt-3">
                    {broker.details.map(detail => {
                      return (
                        <li>{detail}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      )}
    />
  )
}

export default Broker

