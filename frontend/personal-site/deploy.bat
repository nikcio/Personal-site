docker-compose -f ./docker-compose-build.yml build
docker tag personal-site_personal-site_website-fe registry.digitalocean.com/nikcio/personal-site-fe
docker push registry.digitalocean.com/nikcio/personal-site-fe