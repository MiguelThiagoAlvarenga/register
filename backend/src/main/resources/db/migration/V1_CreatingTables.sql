
CREATE TABLE state
(
  initials char(2) NOT NULL,
  id bigint,
  name character varying(200),
  CONSTRAINT pk_state PRIMARY KEY (initials)
);
COMMENT ON TABLE state IS 'Entidade responsável por armazenar os estados.';
COMMENT ON COLUMN state.initials IS 'Campo responsável por armazenar a sigla do estado.';
COMMENT ON COLUMN state.id IS 'Código do IBGE.';
COMMENT ON COLUMN state.name IS 'Nome do Estado.';

CREATE TABLE county
(
  id integer NOT NULL,
  name character varying(200),
  id_state char(2),
  CONSTRAINT pk_county PRIMARY KEY (id),
  CONSTRAINT fk_m_state FOREIGN KEY (id_state)REFERENCES state (id)
);

COMMENT ON TABLE county IS 'Entidade responsável por armazenar as informações de município.';
COMMENT ON COLUMN county.id IS 'Identificado único da entidade.';
COMMENT ON COLUMN county.name IS 'Nome do município.';
COMMENT ON COLUMN county.id_state IS 'Identificador único da entidade estado que realiza o relacionamento entre as entidades municipio e estado. Identifica a qual estado o município pertence.';

CREATE TABLE address
(
  id integer NOT NULL,
  Neighborhood character varying(200),
  zip_code numeric(8),
  address character varying(500),
  id_county integer,
  CONSTRAINT pk_address PRIMARY KEY (id),
  CONSTRAINT fk_county FOREIGN KEY (id_county)REFERENCES row_count (id)
);

COMMENT ON TABLE address IS 'Entidade responsável por armazenar o endereço das pessoas cadastradas e das instituições.';
COMMENT ON COLUMN address.id IS 'Identificador único da entidade endereco.';
COMMENT ON COLUMN address.Neighborhood IS 'Bairro do endereço.';
COMMENT ON COLUMN address.zip_code IS 'Código de Endereçamento Postal do Correios.';
COMMENT ON COLUMN address.address IS ' endereço, rua e numero.';
COMMENT ON COLUMN address.id_county IS 'Identificador da entidade municipio que realizará o relacionamento entre as entidades endereco e municipio. Identifica o município do endereço.';

CREATE SEQUENCE sq_address
  NO MINVALUE
  NO MAXVALUE
  START WITH 1
  INCREMENT BY 1
  CACHE 1;

ALTER TABLE address ALTER COLUMN id SET DEFAULT nextval('sq_address'::regclass);