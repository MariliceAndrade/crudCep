import { Form, Input, Button, Radio } from 'antd';

const CadEnd = () => {
    const [form] = Form.useForm();

    function pesqCep(ev){
        const { value } = ev.target;
        if(value?.length !== 8){
            return; 
        }
        fetch(`https://viacep.com.br/ws/${value}/json/`).then((res) => res.json())
        .then((data) => console.log(data) );
    }

    return (
        <div className='cadastrarend'>
            <Form form={form} layout="vertical" name="endForm">
                <Form.Item label="Cep" name="cep">
                    <Input placeholder="00102100" onBlur={pesqCep} />
                </Form.Item>

                <Form.Item label="Rua" name="rua">
                    <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item label="Numero" name="numero">
                    <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item label="Complemento" name="complemento">
                    <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item label="Ponto de Referência" name="pontoreferencia">
                    <Input placeholder="Em frente ao mercado Vitória" />
                </Form.Item>

                <Form.Item label="Bairro" name="bairro">
                    <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item label="Cidade" name="cidade" type="text">
                    <Input placeholder="Manaus" />
                </Form.Item>

                <Form.Item label="Estado" name="estado" type="text">
                    <Input placeholder="Amazonas" />
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary">Cadastrar</Button>
                </Form.Item>
          </Form>
        </div>
    );
};

export default CadEnd;