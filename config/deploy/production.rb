# frozen_string_literal: true

set :stage, :production
set :user, 'baseapp'
set :public_url, 'https://market.bitzlato.bz/'
set :build_domain, 'market.bitzlato.bz'

server ENV.fetch( 'PRODUCTION_SERVER' ),
       user: fetch(:user),
       roles: fetch(:roles),
       ssh_options: { forward_agent: true }
